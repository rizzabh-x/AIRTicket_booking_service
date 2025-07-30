
# ✈️ AIR Ticket Booking Service

A backend microservice responsible for managing airline ticket bookings in a distributed system. It supports seamless user bookings, flight and seat validation, and communicates asynchronously with other services using a **Message Queue**.

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **MySQL**
- **JWT Authentication**
- **Message Queue (RabbitMQ)**
- **RESTful API Architecture**

---

## 📁 Project Structure

```
AIRTicket_booking_service/
│
├── controllers/        # Handle request logic
├── middlewares/        # Custom middlewares (e.g., auth, error handling)
├── models/             # Sequelize models
├── routes/             # Route definitions
├── services/           # Business logic (booking, validation, MQ, etc.)
├── utils/              # Helper functions and constants
├── config/             # DB, env, queue config
├── index.js            # Entry point of the app
└── README.md
```

---

## 🔑 Key Features

- 🔐 **JWT-based Authentication** – Secures all booking requests
- 📦 **Transactions** – Ensures reliable ticket booking
- 🔎 **Flight & Seat Validation** – Prevents overbooking
- 🔁 **Microservice-Compatible** – Works with flight & auth services
- ⚙️ **Modular Codebase** – Clean separation of concerns

---

## 🧪 API Endpoints

> Base URL: `/api/v1/bookings`

| Method | Endpoint             | Description                        | Auth Required |
|--------|----------------------|------------------------------------|---------------|
| POST   | `/`                  | Book a flight ticket               | ✅ Yes         |
| GET    | `/:bookingId`        | Get booking details by ID          | ✅ Yes         |
| DELETE | `/:bookingId`        | Cancel a booking                   | ✅ Yes         |

---

## 📬 Message Queue Usage

- **Queue Purpose**: Decouples services by emitting and listening to events such as:
  - `FLIGHT_LOCKED`
  - `BOOKING_CREATED`
  - `PAYMENT_FAILED`
  - `BOOKING_CONFIRMED`

- **Benefits**:
  - Improves fault tolerance and scalability
  - Enables async workflows (e.g., delayed booking confirmations)
  - Makes system extensible with new event consumers

---

## 🛠️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/rizzabh-x/AIRTicket_booking_service.git
cd AIRTicket_booking_service
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
PORT=3002
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
FLIGHT_SERVICE_URL=http://localhost:3001/api/v1/flights

# Message Queue
QUEUE_URL=amqp://localhost
```

4. **Run migrations**

```bash
npx sequelize-cli db:migrate
```

5. **Start the server**

```bash
npm start
```

---

## 🧩 Dependencies

- `express`
- `sequelize`
- `mysql2`
- `jsonwebtoken`
- `axios`
- `dotenv`
- `amqplib` 

---

## 🚀 Future Improvements

- Payment gateway integration
- Booking timeout & retry strategy
- Dashboard for queue metrics & failures
- Event schema validation

---

## 🤝 Contribution

Contributions, issues and feature requests are welcome!  
Feel free to fork the repo and submit a pull request.

---

## 📄 License

[MIT](https://opensource.org/licenses/MIT)

---

## 🔗 Related Repositories

- 🔍 [Flight Search Service](https://github.com/rizzabh-x/flight_search_service)
- 🔐 [Authorization Service](https://github.com/rizzabh-x/Authorization_service)
