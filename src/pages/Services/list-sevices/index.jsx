import { Space, Tag } from 'antd';
import DataTable from 'components/DataTable';
import IconButton from 'components/IconButton';
import useItems from 'hooks/services/useItems';
import { useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const ServicesList = () => {
  const navigate = useNavigate();
  const { data: items, isLoading } = useItems();

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  const handleClick = () => {
    navigate('create');
  };

  return (
    <div className="p-4">
      <div className="text-3xl font-bold pb-4">Services</div>
      {isLoading ? (
        <div class="flex items-center justify-center h-screen">
          <FadeLoader color="#191D88" loading={isLoading} />
        </div>
      ) : (
        <>
          <div className="pb-4">
            <IconButton label="Add Service" onClick={handleClick} />
          </div>
          <div>
            <DataTable columns={columns} data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default ServicesList;
