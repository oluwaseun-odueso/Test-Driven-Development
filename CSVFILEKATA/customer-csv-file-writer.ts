import { Customer } from "./customer";
import { FileWriter } from "./file-writer";

export class CustomerCsvFileWriter {
  constructor (private fileWriter: FileWriter) {}

  writeCustomers(fileName: string, customers: Customer[]) {
    this.fileWriter.writeline(fileName, `${customers[0].name},${customers[0].contactNumber}`)
    if (customers.length > 1) {
      this.fileWriter.writeline(fileName, `${customers[1].name},${customers[1].contactNumber}`)
    }
  }
}