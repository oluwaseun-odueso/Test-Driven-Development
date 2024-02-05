import { Customer } from "./customer";
import { FileWriter } from "./file-writer";

export class CustomerCsvFileWriter {
  constructor (private fileWriter: FileWriter) {}

  writeCustomers(fileName: string, customers: Customer[]) {
    for (let index = 0; index < customers.length; index += 1) {
      this.fileWriter.writeline(fileName, `${customers[index].name},${customers[index].contactNumber}`)

    }
    
    // this.fileWriter.writeline(fileName, `${customers[0].name},${customers[0].contactNumber}`)
    // if (customers.length > 1) {
    //   this.fileWriter.writeline(fileName, `${customers[1].name},${customers[1].contactNumber}`)
    // }
  }
}