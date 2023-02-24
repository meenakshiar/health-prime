import FilterAndSort from '@/components/FilterAndSort';
import Pagination from '@/components/Pagination_m';
import ProductCard from '@/components/ProductCard';
import TopSectionProductsPage from '@/components/TopSectionProductsPage';
import { Box, Grid } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = ({ data }) => {
    // console.log(data.length);
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState("")
    const [order, setOrder] = useState("")
    const [filterValue, setFilterValue] = useState("products")
    let pageSize = 8;
    let items = data.length;
    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    // const sorting = (value) => {
    //     setSort(value);
    //     setOrder(value);
    // }

    const handleFilter = (value) => {
        setFilterValue(value)
        console.log(filterValue)
    }

    // const filterData = async () => {
    //     const response = await axios
    //         .get(`https://dead-earrings-tick.cyclic.app/${filterValue}`)
    //         .then((res) => { console.log(res.data) })
    // }
    // useEffect(() => {
    //     filterData();
    //     // console.log(response);
    // }, [])

    return (
        <>
            <Box
                display={{ "lg": "flex", "md": "flex", "base": "grid" }}
                gap={{ "lg": "50px", "md": "20px" }}
                bg='#f6f6f6'
            >
                <FilterAndSort handleFilter={handleFilter} />
                
                <Box className='allProductSection' p={{ "base": "20px" }}>
                    <TopSectionProductsPage />
                    <Grid
                        templateColumns={{ "lg": "repeat(4, 1fr)", "md": "repeat(2, 1fr)", "base": "repeat(1, 1fr)" }}
                        gap="20px 20px"
                        mt='30px'
                    >
                        {
                            data.length && data.filter((item, i) => {
                                return i >= 8 * (currentPage - 1) && i < 8 * currentPage
                            }).map((item, i) => {
                                return <ProductCard key={i + 1} {...item} />
                            })
                        }
                    </Grid>
                </Box>
            </Box>
            <Pagination
                onPageChange={onPageChange}
                pageSize={pageSize}
                items={items}
                currentPage={currentPage}
            />
        </>
    )
}

export default Products;

export async function getServerSideProps() {
    const data = await axios
        .get(`https://dead-earrings-tick.cyclic.app/products`)
        .then((res) => { return res.data })
        .catch((error) => console.log(error));
    return { props: { data } };
}