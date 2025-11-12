import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card, Descriptions, Button, Spin } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { setSelectedInvoice } from '../store/actions/invoiceActions';

const InvoiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { invoices, selectedInvoice } = useSelector((state) => state.invoices);

  useEffect(() => {
    const invoice = invoices.find((inv) => inv.id === id);
    if (invoice) {
      dispatch(setSelectedInvoice(invoice));
    }
  }, [id, invoices, dispatch]);

  if (!selectedInvoice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  const statusColorMap = {
    'Paid': 'text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium inline-block',
    'Pending': 'text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full font-medium inline-block',
    'Overdue': 'text-red-600 bg-red-100 px-3 py-1 rounded-full font-medium inline-block',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            {t('invoiceDetail.title')}
          </h1>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-4">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/invoices')}
            className="font-medium"
          >
            {t('invoiceDetail.backToList')}
          </Button>
        </div>

        <Card
          title={
            <div className="text-xl font-semibold">
              {selectedInvoice.id}
            </div>
          }
          className="shadow-lg"
        >
          <Descriptions bordered column={1} size="middle">
            <Descriptions.Item
              label={<span className="font-semibold">{t('invoiceDetail.invoiceNumber')}</span>}
            >
              {selectedInvoice.id}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="font-semibold">{t('invoiceDetail.customer')}</span>}
            >
              {selectedInvoice.customer}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="font-semibold">{t('invoiceDetail.amount')}</span>}
            >
              <span className="text-lg font-bold text-blue-600">
                ${selectedInvoice.amount.toFixed(2)}
              </span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="font-semibold">{t('invoiceDetail.date')}</span>}
            >
              {selectedInvoice.date}
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="font-semibold">{t('invoiceDetail.status')}</span>}
            >
              <span className={statusColorMap[selectedInvoice.status]}>
                {selectedInvoice.status}
              </span>
            </Descriptions.Item>
            <Descriptions.Item
              label={<span className="font-semibold">{t('invoiceDetail.description')}</span>}
            >
              {selectedInvoice.description}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    </div>
  );
};

export default InvoiceDetailPage;
