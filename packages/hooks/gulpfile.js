const gulp = require('gulp');
const fg = require('fast-glob');
const fse = require('fs-extra');
const gm = require('gray-matter');
const common = require('../../gulpfile');

// 添加hooks文档声明 meta.json

function generateDesc(path) {
  if (!fse.existsSync(path)) {
    return;
  }

  const mdfile = fse.readFileSync(path, 'utf-8');
  const { content } = gm(mdfile);
  const description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';
  return description.trim();
}
async function generateDoc() {
  const metaData = {
    functions: [],
  };

  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true,
    })
    .map((item) => item.replace('src', ''));

  await Promise.allSettled(
    hooks.map(async (hook) => {
      const desc = await generateDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        desc,
      };
    }),
  ).then((res) => {
    metaData.functions = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }

      return null;
    });
  });

  return metaData;
}

gulp.task('metadata', async () => {
  const metaData = await generateDoc();

  await fse.writeJSON('metadata.json', metaData, {
    spaces: 2,
  });
});

// 创建任务之后,执行输出产物
exports.default = gulp.series(common.default, 'metadata');
