const fs = require('fs');
const fileName = './export_m';
const regex = /"(.*)","(\d{4})",(\d{1,3})/gm;

fs.readFile(fileName + '.csv', function (err, buf) {
  const lines = buf.toString().split('\n');

  const storeYearTotals = (yearTotals, line) => {
    const [_, name, year, count] = line.split(regex);
    if (!count) {
      console.log(line);
      return yearTotals;
    }
    if (!yearTotals[name]) yearTotals[name] = Array.from({ length: 25 }, () => null);
    yearTotals[name][year - 1995] = +count;
    return yearTotals;
  };

  const result = JSON.stringify(lines.reduce(storeYearTotals, {}));
  fs.writeFile(fileName + '.json', result, function (err) {
    if (err) console.log(err);
    else console.log('file written');
  });
});
