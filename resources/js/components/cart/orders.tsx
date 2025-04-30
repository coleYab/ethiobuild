import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const OrdersTable = ({ orders } : { orders: any[]}) => {
  return (
    <Table>
      <TableCaption>A list of your recent orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Order ID</TableHead>
          <TableHead>User ID</TableHead>
          <TableHead>Order Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Cost</TableHead>
          <TableHead>Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.user_id}</TableCell>
            <TableCell>{new Date(order.order_date).toLocaleString()}</TableCell>
            <TableCell>{order.order_status}</TableCell>
            <TableCell className="text-right">${order.order_cost}</TableCell>
            <TableCell>{new Date(order.updated_at).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
