export type DataRow = {
  id: string;
  type: string;
  email: string;
  subject: string;
  deadline: string;
  pages: string;
  phone: string;
  description: string;
  reference: string;
  file_name: string;
  create_time: string;
  customer_name: string;
};

// const handleButtonClick = (id) => {
//   console.log('Row ID:', id);
// };

//@ts-ignore
export function convertArrayOfObjectsToCSV(array) {
  let result: string;
  console.log(array);
  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  //@ts-ignore
  array.forEach((item) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;
      if (key === "create_time") {
        const date = new Date(item[key] * 1000);
        console.log(
          date.toLocaleDateString() + " : " + date.toLocaleTimeString()
        );
        const formattedDate =
          date.toLocaleDateString() + " : " + date.toLocaleTimeString();

        result += formattedDate;
      } else {
        result += item[key];
      }

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}
//@ts-ignore
export function downloadCSV(array) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}
