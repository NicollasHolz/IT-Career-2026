<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Service Quote Calculator</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main class="container">
    <h1>Service Quote Calculator</h1>
    <p class="subtitle">A simple quote calculator for small service businesses.</p>

    <section class="card">
      <label for="customerName">Customer name</label>
      <input type="text" id="customerName" placeholder="Example: John Smith" />

      <label for="serviceType">Service type</label>
      <select id="serviceType">
        <option value="">Select a service</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Car Detailing">Car Detailing</option>
        <option value="Pressure Washing">Pressure Washing</option>
        <option value="Furniture Delivery">Furniture Delivery</option>
      </select>

      <label for="hours">Estimated hours</label>
      <input type="number" id="hours" placeholder="Example: 3" />

      <label for="hourlyRate">Hourly rate</label>
      <input type="number" id="hourlyRate" placeholder="Example: 45" />

      <label for="extraFee">Extra fee</label>
      <input type="number" id="extraFee" placeholder="Example: 20" />

      <button id="calculateBtn">Calculate quote</button>

      <div id="result" class="result"></div>
    </section>

    <section class="card">
      <h2>Saved Quotes</h2>
      <ul id="quotesList"></ul>
    </section>

  </main>

  <script src="script.js"></script>
</body>
</html>
