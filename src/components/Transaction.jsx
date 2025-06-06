import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    {
        "name": "Jan",
        "Expense": 4000,
        "Income": 2400
      },
      {
        "name": "Feb",
        "Expense": 3000,
        "Income": 1398
      },
      {
        "name": "Mar",
        "Expense": 2000,
        "Income": 9800
      },
      {
        "name": "Apr",
        "Expense": 2780,
        "Income": 3908
      },
      {
        "name": "May",
        "Expense": 1890,
        "Income": 4800
      },
      {
        "name": "Jun",
        "Expense": 2390,
        "Income": 5000
      },
      {
        "name": "July",
        "Expense": 3490,
        "Income": 4300
      },
      {
        "name": "Aug",
        "Expense": 4000,
        "Income": 5800
      },
      {
        "name": "Sep",
        "Expense": 2390,
        "Income": 3800
      },
      {
        "name": "Oct",
        "Expense": 3490,
        "Income": 4300
      },
      {
        "name": "Nov",
        "Expense": 6000,
        "Income": 9000
      },
      {
        "name": "Dec",
        "Expense": 2000,
        "Income": 6000
      }

];


export function Transaction(){
    return(
        <div className="h-[20rem] bg-white p-4 border border-gray-200 rounded-sm flex flex-1 flex-col "> 
        {/*   */}
            <strong className="font-medium text-gray-700">Transactions</strong>
            <div className="w-full mt-3 flex-1 text-xs mt-4 h-{100}">
            {/*  */}
            <ResponsiveContainer  >
            {/* width="100%" height="400px" */}
                    <BarChart width={400} height={400}   data={data} >
                   
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Income" fill="#0ea5e9" />
                        <Bar dataKey="Expense" fill="#ea580c" />
                    </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
}