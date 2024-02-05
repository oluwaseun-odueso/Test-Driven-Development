// SOLID

import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customer-csv-file-writer";
import { FileWriter } from "./file-writer";

describe('CustomerCsvFileWriter', () => {
  describe('one customer', () => {
    test.each([
      {customer: createCustomer ("Peter Wiles", "12787939829")},
      {customer: createCustomer ("Larry Page", "32773097753874")}
    ])('customer: $expected', ({customer}) => {
      // Arrange
      const fileWriter = createFileWriter()
      const sut = createCustomerCsvFileWriter(fileWriter)
      const fileName = "customers.csv";
      // Act
      sut.writeCustomers(fileName, [customer])
      // Assert
      expect(fileWriter.writeline).toHaveBeenCalledTimes(1);
      assertCustomerWasReturnedToFile(fileWriter, fileName, customer)
      // expect(fileWriter.writeline).toBeCalledWith("customers.csv", expected)
    })
  })

  describe('two customers', () => {
    test('should write both customers', () => {
      // Arrange
      const customers = [
        createCustomer ("Peter Wiles", "12787939829"), 
        createCustomer("Larry Page", "32773097753874"),
        createCustomer ("Alan Fisher", "21589330878240")

      ]
      const fileWriter = createFileWriter()
      const sut = createCustomerCsvFileWriter(fileWriter)
      const fileName = "cust.csv";
      // Act
      sut.writeCustomers(fileName, customers)
      // Assert
      expect(fileWriter.writeline).toHaveBeenCalledTimes(3);
      asserCustomersReturnedToFile(fileWriter, fileName, customers)
    })
  })
})

function createCustomerCsvFileWriter (fileWriter: FileWriter) {
  return new CustomerCsvFileWriter(fileWriter)
}

function createFileWriter (): FileWriter {
  return {
    writeline: jest.fn()
  }
}

function createCustomer (name: string, contactNumber: string) {
  return new Customer(name, contactNumber)
}

function assertCustomerWasReturnedToFile (fileWriter: FileWriter, fileName: string, customer: Customer) {
  expect(fileWriter.writeline).toBeCalledWith(fileName, `${customer.name},${customer.contactNumber}`)
}

function asserCustomersReturnedToFile (fileWriter: FileWriter, fileName: string, customers: Customer[]) {
  for (let index = 0; index < customers.length; index += 1) {
    assertCustomerWasReturnedToFile(fileWriter, fileName, customers[index])
  }
}