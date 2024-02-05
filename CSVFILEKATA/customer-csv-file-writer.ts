import { Customer } from "./customer";
import { FileWriter } from "./file-writer";

export class CustomerCsvFileWriter {
  constructor (private fileWriter: FileWriter) {}

  writeCustomers(fileName: string, customers: Customer[]) {
    this.fileWriter.writeline("",  "Peter Wile,12787939829")
  }
}