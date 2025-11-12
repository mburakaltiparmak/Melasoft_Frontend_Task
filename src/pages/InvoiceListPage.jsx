import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Table, Button, Spin } from 'antd';
import { fetchInvoices } from '../store/invoiceSlice';
import { logout } from '../store/authSlice';
import LanguageSwitcher from '../components/LanguageSwitcher';

const InvoiceListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { invoices, loading } = useSelector((state) => state.invoices);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const columns = [
    {
      title: t('invoices.id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('invoices.customer'),
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: t('invoices.amount'),
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `$${amount.toFixed(2)}`,
    },
    {
      title: t('invoices.date'),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: t('invoices.status'),
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const colorMap = {
          'Paid': 'text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium',
          'Pending': 'text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full font-medium',
          'Overdue': 'text-red-600 bg-red-100 px-3 py-1 rounded-full font-medium',
        };
        return <span className={colorMap[status] || 'text-gray-600'}>{status}</span>;
      },
    },
    {
      title: t('invoices.actions'),
      key: 'actions',
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => navigate(`/invoices/${record.id}`)}
        >
          {t('invoices.viewDetails')}
        </Button>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {t('invoices.title')}
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Welcome, {user?.name}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <LanguageSwitcher />
            <Button danger onClick={handleLogout}>
              {t('common.logout')}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow">
          <Table
            columns={columns}
            dataSource={invoices}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total} invoices`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceListPage;
