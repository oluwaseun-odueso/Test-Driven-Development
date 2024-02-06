// SOLID

import { Customer } from "./customer";
import { CustomerCsvFileWriter } from "./customer-csv-file-writer";
import { FileWriter } from "./file-writer";

describe('CustomerCsvFileWriter', () => {
  describe('null customers array', () => {
    test('should throw an argument exception', () => {
      // Arrange
      const fileWriter = createFileWriter()
      const sut = createCustomerCsvFileWriter(fileWriter)
      const fileName = "customers.csv";
      // Act
      sut.writeCustomers(fileName, [])
      // Assert
      expect(fileWriter.writeline).toHaveBeenCalledTimes(0);
      expect(() => sut.writeCustomers(fileName, null!)).toThrowError("customer")
    })
  })

  describe('no customers', () => {
    test('should not write any line', () => {
      // Arrange
      const fileWriter = createFileWriter()
      const sut = createCustomerCsvFileWriter(fileWriter)
      const fileName = "customers.csv";
      // Act
      sut.writeCustomers(fileName, [])
      // Assert
      expect(fileWriter.writeline).toHaveBeenCalledTimes(0);
    })
  })

  describe('one customer', () => {
    test.each([
      {customer: createCustomer ("Peter Wiles", "12787939829")},
      {customer: createCustomer ("Larry Page", "32773097753874")}
    ])('customer: $customer', ({customer}) => {
      // Arrange
      const fileWriter = createFileWriter()
      const sut = createCustomerCsvFileWriter(fileWriter)
      const fileName = "customers.csv";
      // Act
      sut.writeCustomers(fileName, [customer])
      // Assert
      expect(fileWriter.writeline).toHaveBeenCalledTimes(1);
      assertCustomerWasReturnedToFile(fileWriter, fileName, customer)
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
      assertCustomersReturnedToFile(fileWriter, fileName, customers)
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

function assertCustomersReturnedToFile (fileWriter: FileWriter, fileName: string, customers: Customer[]) {
  for (let index = 0; index < customers.length; index += 1) {
    assertCustomerWasReturnedToFile(fileWriter, fileName, customers[index])
  }
}