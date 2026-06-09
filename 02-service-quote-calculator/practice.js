const calculateButton = document.getElementById("calculate");
const customerNameInput = document.getElementById("customerName");
const hoursInput = document.getElementById("hours");
const hourlyRateInput = document.getElementById("hourlyRate");
const extraFeeInput = document.getElementById("extraFee");
const discountInput = document.getElementById("discount");
const resultDiv = document.getElementById("result");
const quotesList = document.getElementById("quotesList");
const serviceTypeInput = document.getElementById("serviceType");
const clearAllButton = document.getElementById("clearAll");
const summaryDiv = document.getElementById("summary");

let quotes = loadQuotes();

calculateButton.addEventListener("click", function () {
    const customerName = customerNameInput.value.trim();
    const serviceType = serviceTypeInput.value;
    const hours = Number(hoursInput.value);
    const hourlyRate = Number(hourlyRateInput.value);
    const extraFee = Number(extraFeeInput.value);
    const discount = Number(discountInput.value);

    if (!customerName) {
        resultDiv.textContent = "Please enter the customer's name.";
        return;
    }
    if (!serviceType) {
        resultDiv.textContent = "Please select a service type.";
        return;
    }
    if (hours <= 0) {
        resultDiv.textContent = "Please enter a valid number of hours.";
        return; 
    }
    if (hourlyRate <= 0) {
        resultDiv.textContent = "Please enter a valid hourly rate.";
        return; 
    }
    if (extraFee < 0) {
        resultDiv.textContent = "Please enter a valid extra fee.";
        return; 
    }
    if (discount < 0) {
        resultDiv.textContent = "Please enter a valid discount.";
        return; 
    }

    const total = calculateTotal(hours, hourlyRate, extraFee, discount);
    const createdAt = new Date().toLocaleString();

    const quote = {
        customerName,
        serviceType,
        hours,
        hourlyRate,
        extraFee,
        discount,
        total,
        createdAt
    };

    quotes.push(quote);

    saveQuotes();
    renderQuotes();
    renderSummary();
    clearInputs();

    console.log("Total quotes calculated:", quotes.length);

    console.table(quotes);

    resultDiv.innerHTML = `
        Quote for ${customerName}<br>
        Service Type: ${serviceType}<br>
        Hours: ${hours}<br>
        Hourly Rate: $${hourlyRate.toFixed(2)}<br>
        Extra Fee: $${extraFee.toFixed(2)}<br>
        Discount: $${discount.toFixed(2)}<br>
        Total: $${total.toFixed(2)}
    `;
});

function calculateTotal(hours, hourlyRate, extraFee, discount) {
    return hours * hourlyRate + extraFee - discount;
}

function renderQuotes() {
    quotesList.innerHTML = "";
    quotes.forEach(function (quote, index) {
        const li = document.createElement("li");

        const quoteText = document.createElement("span");
        quoteText.textContent = `${index + 1}. ${quote.customerName} | ${quote.serviceType} | ${quote.hours}h x $${quote.hourlyRate.toFixed(2)} + $${quote.extraFee.toFixed(2)} extra - $${quote.discount.toFixed(2)} discount = $${quote.total.toFixed(2)} | Created: ${quote.createdAt || "No date"}`;


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function () {
            deleteQuotes(index);
        });

        li.appendChild(quoteText);
        li.appendChild(deleteButton);

        quotesList.appendChild(li);
        
    });
}

function clearInputs() {
    customerNameInput.value = "";
    serviceTypeInput.value = "";
    hoursInput.value = "";
    hourlyRateInput.value = "";
    extraFeeInput.value = "";
    discountInput.value = "";
}

function loadQuotes() {
    const savedQuotes = localStorage.getItem("quotes");

    if (savedQuotes) {
        return JSON.parse(savedQuotes);
    } else {
        return [];
    }
}

function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

function deleteQuotes(index) {
    quotes.splice(index, 1);
    saveQuotes();
    renderQuotes();
    renderSummary();
}

clearAllButton.addEventListener("click", function () {
    quotes = [];
    saveQuotes();
    renderQuotes();
    renderSummary();
});

function renderSummary() {
    const totalQuotes = quotes.length;

    const totalAmount = quotes.reduce(function (sum, quote) {
        return sum + quote.total;
    }, 0);

    const averageQuote = totalQuotes > 0 ? totalAmount / totalQuotes : 0;

    summaryDiv.innerHTML = `
        <div class="summary-card">
            <span class="summary-label">Total Quotes</span>
            <strong>${totalQuotes}</strong>
        </div>

        <div class="summary-card">
            <span class="summary-label">Total Amount</span>
            <strong>$${totalAmount.toFixed(2)}</strong>
        </div>

        <div class="summary-card">
            <span class="summary-label">Average Quote</span>
            <strong>$${averageQuote.toFixed(2)}</strong>
        </div>
    `;
}




renderQuotes();
renderSummary();