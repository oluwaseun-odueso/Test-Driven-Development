// SOLID

import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customer-csv-file-writer";
import { FileWriter } from "./file-writer";

describe('CustomerCsvFileWriter', () => {
  describe('one customer', () => {
    test.each([
      {customer: new Customer("Peter Wiles", "12787939829"), expected: "Peter Wiles,12787939829"},
      {customer: new Customer("Larry Page", "32773097753874"), expected: "Larry Page,32773097753874"}
    ])('customer: $expected', ({customer, expected}) => {
      // Arrange
      const fileWriter: FileWriter = {
        writeline: jest.fn()
      }
      const sut = new CustomerCsvFileWriter(fileWriter)
      // Act
      sut.writeCustomers("customers.csv", [customer])
      // Assert
      expect(fileWriter.writeline).toHaveBeenCalledTimes(1);
      expect(fileWriter.writeline).toBeCalledWith("customers.csv", expected)
    })
  })

  describe('two customers', () => {
    test('should write both customers', () => {
      // Arrange
      const customers = [new Customer("Peter Wiles", "12787939829"), new Customer("Larry Page", "32773097753874")]
      const fileWriter: FileWriter = {
        writeline: jest.fn()
      }
      const sut = new CustomerCsvFileWriter(fileWriter)
      // Act
      sut.writeCustomers("cust.csv", customers)
      // Assert
      expect(fileWriter.writeline).toHaveBeenCalledTimes(2);
      expect(fileWriter.writeline).toBeCalledWith("cust.csv", "Peter Wiles,12787939829")
      expect(fileWriter.writeline).toBeCalledWith("cust.csv", "Larry Page,32773097753874")
    })
  })
})