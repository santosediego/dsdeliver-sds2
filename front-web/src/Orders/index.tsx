import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import { OrderLocationData, Product } from './types';
import './styles.css';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocaction] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0)

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(() => {
                toast.warning('Erro ao listar produtos')
            })
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));

        if (productsIds.length <= 0) {
            toast.warning('Por favor, selecione ao menos um pedido');
        } else {
            if (orderLocation === undefined) {
                toast.warning('Por favor, informe um endereço');
            } else {
                const payload = {
                    ...orderLocation!,
                    products: productsIds
                }

                saveOrder(payload)
                    .then((response) => {
                        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
                        setSelectedProducts([]);
                    })
                    .catch(() => {
                        toast.warning('Erro ao enviar pedido');
                    })
            }
        }


    }

    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductsList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocaction(location)} />
                <OrderSummary
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}
                />
                <Footer />
            </div>
        </>
    )
}

export default Orders;