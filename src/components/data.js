export default [
    {
      "id": 1,
      "name": "Test company",
      "street": "Testikatu 1",
      "zip": "00100",
      "city": "Helsinki",
      "due_date": "2020-08-01",
      "rows": [
        {
          "quantity": 3,
          "currency": "EUR",
          "unit_price": 1.24,
          "unit_of_measurement": "kpl",
          "vat": 24,
          "name": "Sample invoice row 1"
        },
        {
          "quantity": -1,
          "currency": "EUR",
          "unit_price": 2.48,
          "unit_of_measurement": "kpl",
          "vat": 24,
          "name": "Sample invoice row 2"
        }
      ]
    },
    {
      "id": 2,
      "name": "Another test company",
      "street": "Testikatu 3",
      "zip": "00100",
      "city": "Helsinki",
      "due_date": "2020-08-05",
      "rows": [
        {
          "quantity": 1,
          "currency": "EUR",
          "unit_price": 150,
          "unit_of_measurement": null,
          "vat": 0,
          "name": "Sample row"
        }
      ]
    }
  ]