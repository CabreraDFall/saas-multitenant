# Backend for SaaS Application

This is the backend for a SaaS application, built with Node.js, Express, and CORS. It provides an API for registering new tenants.

## Features

*   **Tenant Registration:** Allows new tenants to register with a company name and email.
*   **Subdomain Generation:** Automatically generates a subdomain based on the company name.
*   **CORS Enabled:**  Allows requests from different origins.

## Technologies Used

*   Node.js
*   Express
*   CORS

## Setup

1.  **Clone the repository:**
    ```bash
    git clone [repository URL]
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set environment variables:**
    Create a `.env` file in the backend directory and set the following variables:

    ```
    DATABASE_URL="your_database_url"
    ```

4.  **Run the application:**
    ```bash
    node index.js
    ```

    The API will be running on `http://localhost:4000`.

## API Endpoints

*   `GET /`: Returns "SaaS backend running!".
*   `POST /api/register`: Registers a new tenant.  Requires a JSON body with `companyName` and `email`. Returns a JSON object with `success: true` and the generated `url`.

## Example Usage (Register Tenant)

```bash
curl -X POST http://localhost:4000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "companyName": "Acme Corp",
    "email": "info@acmecorp.com"
  }'
```

## Contributing

Contributions are welcome!  Please submit pull requests.

## License

[Insert License Here]
