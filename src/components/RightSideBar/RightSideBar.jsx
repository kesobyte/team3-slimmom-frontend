import { useSelector } from 'react-redux';
import {
  Wrapper,
  SummaryWrap,
  FoodWrap,
  Title,
  Item,
  Text,
  RedText,
} from './RightSideBar.styled';
import moment from 'moment';
import {
  getProfileUser,
  getProfileLoading,
} from '../../redux/profile/selectors';
import { Loader } from 'components/Loader/Loader';

export const RightSideBar = () => {
  const selectedDate =
    useSelector(state => state.diary.selectedDate) || 'No date available';
  const userProfile = useSelector(getProfileUser);
  const isLoading = useSelector(getProfileLoading);
  const diaryEntries = useSelector(state => state.diary.diaryEntries) || [];

  const dailyCalorieLimit = userProfile?.data?.dailyCalories || 0;

  const calculateTotalCalories = () => {
    return diaryEntries.reduce((total, product) => {
      return total + Number.parseInt(product.calories || 0);
    }, 0);
  };

  const totalCalories = calculateTotalCalories();
  const leftCalories = dailyCalorieLimit - totalCalories;
  const nOfNorm = dailyCalorieLimit
    ? (totalCalories / dailyCalorieLimit) * 100
    : 0;
  const notAllowedProducts = userProfile?.notRecommended || 0;

  return (
    <div>
      <Wrapper>
        {isLoading ? (
          <div className="flex justify-center mx-auto xl:mt-[70px] mt-[40px]">
            <Loader />
          </div>
        ) : (
          <>
            <SummaryWrap>
              <Title>
                Summary for{' '}
                {moment(selectedDate, 'YYYY-MM-DD').format('DD.MM.YYYY')}
              </Title>
              <ul>
                <Item>
                  <Text>Left</Text>
                  {leftCalories < 0 ? (
                    <RedText>{leftCalories} kcal</RedText>
                  ) : (
                    <Text>{leftCalories ? leftCalories : '000'} kcal</Text>
                  )}
                </Item>
                <Item>
                  <Text>Consumed{}</Text>
                  <Text>{totalCalories ? totalCalories : '000'} kcal</Text>
                </Item>
                <Item>
                  <Text>Daily rate</Text>
                  <Text>{userProfile ? dailyCalorieLimit : '000'} kcal</Text>
                </Item>
                <Item>
                  <Text>n% of normal</Text>
                  {nOfNorm > 100 ? (
                    <RedText>{nOfNorm ? Math.round(nOfNorm) : '0'} %</RedText>
                  ) : (
                    <Text>{nOfNorm ? Math.round(nOfNorm) : '0'} %</Text>
                  )}
                </Item>
              </ul>
            </SummaryWrap>
            <FoodWrap>
              <Title>Food not recommended</Title>
              {notAllowedProducts.length > 0 ? (
                <ul className="flex flex-col gap-[10px]">
                  {notAllowedProducts.map((prod, index) => (
                    <Text key={index}>
                      {index + 1}.{' '}
                      {prod.charAt(0).toUpperCase() + prod.slice(1)}
                    </Text>
                  ))}
                </ul>
              ) : (
                <Text>Your diet will be displayed here</Text>
              )}
            </FoodWrap>
          </>
        )}
      </Wrapper>
    </div>
  );
};
