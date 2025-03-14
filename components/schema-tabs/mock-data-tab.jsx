"use client"

import { useState } from "react"

export default function MockDataTab() {
  const [rowCount, setRowCount] = useState("5 rows")
  const [viewType, setViewType] = useState("Table View")

  return (
    <div className="p-4">
      <div className="flex justify-between mb-6">
        <div className="relative">
          <select
            value={rowCount}
            onChange={(e) => setRowCount(e.target.value)}
            className="appearance-none bg-gray-900 text-white text-sm rounded px-3 py-2 pr-8 border border-gray-700 focus:outline-none focus:border-green-500"
          >
            <option>5 rows</option>
            <option>10 rows</option>
            <option>20 rows</option>
            <option>50 rows</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm mr-4">
            Regenerate
          </button>

          <div className="relative">
            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className="appearance-none bg-gray-900 text-white text-sm rounded px-3 py-2 pr-8 border border-gray-700 focus:outline-none focus:border-green-500"
            >
              <option>Table View</option>
              <option>JSON View</option>
              <option>CSV View</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-2">Customers</h3>
        <p className="text-gray-400 text-sm mb-2">Generated mock data for the schema customers</p>

        <div className="bg-gray-900 rounded overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800">
                <th className="text-left py-2 px-4 text-white">customer_id</th>
                <th className="text-left py-2 px-4 text-white">name</th>
                <th className="text-left py-2 px-4 text-white">email</th>
                <th className="text-left py-2 px-4 text-white">address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">1</td>
                <td className="py-2 px-4 text-white">Alice Smith</td>
                <td className="py-2 px-4 text-white">alice@example.com</td>
                <td className="py-2 px-4 text-white">123 Maple Street</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">2</td>
                <td className="py-2 px-4 text-white">Bob Johnson</td>
                <td className="py-2 px-4 text-white">bob@example.com</td>
                <td className="py-2 px-4 text-white">456 Oak Avenue</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">3</td>
                <td className="py-2 px-4 text-white">Charlie Brown</td>
                <td className="py-2 px-4 text-white">charlie@example.com</td>
                <td className="py-2 px-4 text-white">789 Pine Road</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">4</td>
                <td className="py-2 px-4 text-white">Diana Prince</td>
                <td className="py-2 px-4 text-white">diana@example.com</td>
                <td className="py-2 px-4 text-white">101 Elm Street</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">5</td>
                <td className="py-2 px-4 text-white">Ethan Hunt</td>
                <td className="py-2 px-4 text-white">ethan@example.com</td>
                <td className="py-2 px-4 text-white">202 Birch Lane</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-2">Products</h3>
        <p className="text-gray-400 text-sm mb-2">Generated mock data for the schema products</p>

        <div className="bg-gray-900 rounded overflow-hidden mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800">
                <th className="text-left py-2 px-4 text-white">product_id</th>
                <th className="text-left py-2 px-4 text-white">category</th>
                <th className="text-left py-2 px-4 text-white">price</th>
                <th className="text-left py-2 px-4 text-white">stock_quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">1</td>
                <td className="py-2 px-4 text-white">Beverages</td>
                <td className="py-2 px-4 text-white">29.99</td>
                <td className="py-2 px-4 text-white">100</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">2</td>
                <td className="py-2 px-4 text-white">Snacks</td>
                <td className="py-2 px-4 text-white">15.99</td>
                <td className="py-2 px-4 text-white">200</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">3</td>
                <td className="py-2 px-4 text-white">Electronics</td>
                <td className="py-2 px-4 text-white">49.99</td>
                <td className="py-2 px-4 text-white">50</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">4</td>
                <td className="py-2 px-4 text-white">Books</td>
                <td className="py-2 px-4 text-white">9.99</td>
                <td className="py-2 px-4 text-white">150</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">5</td>
                <td className="py-2 px-4 text-white">Clothing</td>
                <td className="py-2 px-4 text-white">19.99</td>
                <td className="py-2 px-4 text-white">75</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-2">Orders</h3>
        <p className="text-gray-400 text-sm mb-2">Generated mock data for the schema orders</p>

        <div className="bg-gray-900 rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800">
                <th className="text-left py-2 px-4 text-white">order_id</th>
                <th className="text-left py-2 px-4 text-white">customer_id</th>
                <th className="text-left py-2 px-4 text-white">product_id</th>
                <th className="text-left py-2 px-4 text-white">order_date</th>
                <th className="text-left py-2 px-4 text-white">total_amount</th>
                <th className="text-left py-2 px-4 text-white">payment_status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">1</td>
                <td className="py-2 px-4 text-white">1</td>
                <td className="py-2 px-4 text-white">1</td>
                <td className="py-2 px-4 text-white">Sun Oct 01 2023 10:00:00 GMT+0530 (India Standard Time)</td>
                <td className="py-2 px-4 text-white">29.99</td>
                <td className="py-2 px-4 text-white">Paid</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">2</td>
                <td className="py-2 px-4 text-white">2</td>
                <td className="py-2 px-4 text-white">3</td>
                <td className="py-2 px-4 text-white">Mon Oct 02 2023 14:30:00 GMT+0530 (India Standard Time)</td>
                <td className="py-2 px-4 text-white">49.99</td>
                <td className="py-2 px-4 text-white">Pending</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">3</td>
                <td className="py-2 px-4 text-white">1</td>
                <td className="py-2 px-4 text-white">2</td>
                <td className="py-2 px-4 text-white">Tue Oct 03 2023 09:15:00 GMT+0530 (India Standard Time)</td>
                <td className="py-2 px-4 text-white">15.99</td>
                <td className="py-2 px-4 text-white">Cancelled</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">4</td>
                <td className="py-2 px-4 text-white">3</td>
                <td className="py-2 px-4 text-white">4</td>
                <td className="py-2 px-4 text-white">Wed Oct 04 2023 11:45:00 GMT+0530 (India Standard Time)</td>
                <td className="py-2 px-4 text-white">9.99</td>
                <td className="py-2 px-4 text-white">Paid</td>
              </tr>
              <tr className="border-t border-gray-800">
                <td className="py-2 px-4 text-white">5</td>
                <td className="py-2 px-4 text-white">4</td>
                <td className="py-2 px-4 text-white">5</td>
                <td className="py-2 px-4 text-white">Thu Oct 05 2023 16:00:00 GMT+0530 (India Standard Time)</td>
                <td className="py-2 px-4 text-white">19.99</td>
                <td className="py-2 px-4 text-white">Paid</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

