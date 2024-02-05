// SOLID

import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customer-csv-file-writer";
import { FileWriter } from "./file-writer";

describe('CustomerCsvFileWriter', () => {
  test('?', () => {
    // Arrange
    const customer = new Customer(
      "Peter Wile",
      "12787939829"
    )
    const fileWriter: FileWriter = {
      writeline: jest.fn()
    }
    const sut = new CustomerCsvFileWriter(fileWriter)
    // Act
    sut.writeCustomers("", [customer])
    // Assert
    expect(fileWriter.writeline).toHaveBeenCalledTimes(1);
    expect(fileWriter.writeline).toBeCalledWith("", "Peter Wile,12787939829")
  })
})