import { Table } from 'antd';

const DataTable = ({ columns, data }) => {
  return <Table columns={columns} pagination={true} dataSource={data} />;
};

export default DataTable;
