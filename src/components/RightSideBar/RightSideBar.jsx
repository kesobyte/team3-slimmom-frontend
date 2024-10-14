import { useSelector } from "react-redux";
import { Wrapper, SummaryWrap, FoodWrap, Title, Item, Text, RedText } from './RightSideBar.styled';

export const RightSideBar = () => {

    const date = useSelector((state) => state.products?.date) || "No date available";
    const dailyRate = useSelector((state) => state.auth?.userInfo?.dailyRate) || 0;
    const notAllowedProducts = useSelector((state) => state.auth?.userInfo?.notAllowedProducts) || [];
    const productsList = useSelector((state) => state.products?.productsList) || [];
    const totalCalories = productsList.map(product => product.productCalories)
        .reduce((prev, product) => { return Number.parseInt(prev) + Number.parseInt(product) }, 0);
    const leftCalories = dailyRate - totalCalories;
    const nOfNorm = dailyRate ? (totalCalories / dailyRate) * 100 : 0;

    return (
        <Wrapper>
            <SummaryWrap>
                <Title>Summary for {date}</Title>
                <ul>
                    <Item>
                        <Text>Left</Text>
                        {leftCalories < 0 ?
                            <RedText>{leftCalories} kcal</RedText> :
                            <Text>{leftCalories ? leftCalories : '000'} kcal</Text> 
                        }
                    </Item>
                    <Item>
                        <Text>Consumed</Text>
                        <Text>{totalCalories ? totalCalories : '000'} kcal</Text>
                    </Item>
                    <Item>
                        <Text>Daily rate</Text>
                        <Text>{dailyRate ? dailyRate : '000'} kcal</Text>
                    </Item>
                    <Item>
                        <Text>n% of normal</Text>
                        {nOfNorm > 100 ?
                            <RedText>{nOfNorm ? Math.round(nOfNorm) : '0'} %</RedText> :
                            <Text>{nOfNorm ? Math.round(nOfNorm) : '0'} %</Text> 
                        }
                    </Item>
                </ul>
            </SummaryWrap>
            <FoodWrap>
                <Title>Food not recommended</Title>
                {notAllowedProducts.length > 0 ? 
                    <ul>
                        {notAllowedProducts.map((prod, index) => (
                            <Text key={index}>
                                {index + 1}. {prod}
                            </Text>
                        ))}
                    </ul> :
                    <Text>Your diet will be displayed here</Text>
                }
            </FoodWrap>
        </Wrapper>
    );
};
