export function isFiscalPrinterActive(config) {
    return config.company_id.country_id.code === "IT" && config.it_fiscal_printer_ip;
}
