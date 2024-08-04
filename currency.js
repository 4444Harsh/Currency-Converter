const countries = {
    "AUD": "AU",
    "CNY": "CN",
    "INR": "IN",
    "USD": "US",
    "EUR": "EU",
    "GBP": "GB",
    "JPY": "JP",
    "CAD": "CA"
};

let exchangeRate = {
    "IN": {
        "IN": 1,
        "US": 0.012,
        "AU": 0.018,
        "CN": 0.087,
        "EU": 0.011,
        "GB": 0.009,
        "JP": 1.3,
        "CA": 0.016
    },
    "US": {
        "US": 1,
        "IN": 83.30,
        "AU": 1.52,
        "CN": 7.23,
        "EU": 0.92,
        "GB": 0.78,
        "JP": 109.57,
        "CA": 1.26
    },
    "AU": {
        "AU": 1,
        "US": 0.66,
        "IN": 54.82,
        "CN": 4.76,
        "EU": 0.61,
        "GB": 0.52,
        "JP": 72.08,
        "CA": 0.83
    },
    "CN": {
        "CN": 1,
        "US": 0.14,
        "AU": 0.21,
        "IN": 11.75,
        "EU": 0.13,
        "GB": 0.11,
        "JP": 15.13,
        "CA": 0.17
    },
    "EU": {
        "EU": 1,
        "US": 1.09,
        "AU": 1.64,
        "CN": 7.58,
        "IN": 90.58,
        "GB": 0.85,
        "JP": 117.12,
        "CA": 1.37
    },
    "GB": {
        "GB": 1,
        "US": 1.28,
        "AU": 1.92,
        "CN": 8.89,
        "IN": 106.46,
        "EU": 1.18,
        "JP": 137.75,
        "CA": 1.61
    },
    "JP": {
        "JP": 1,
        "US": 0.0091,
        "AU": 0.014,
        "CN": 0.066,
        "IN": 0.77,
        "EU": 0.0085,
        "GB": 0.0073,
        "CA": 0.012
    },
    "CA": {
        "CA": 1,
        "US": 0.79,
        "AU": 1.20,
        "CN": 6.29,
        "IN": 66.66,
        "EU": 0.73,
        "GB": 0.62,
        "JP": 82.98
    }
};

let exchangeRateAPI = (srcCode, destCode) => {
    return exchangeRate[srcCode][destCode];
}
