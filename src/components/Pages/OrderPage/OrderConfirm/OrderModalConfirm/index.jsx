import React from 'react';

import MainButton from '../../../../MainButton';

import styles from './orderModalConfirm.module.scss';

const OrderModalConfirm = ({ setIsBreadCrumbs }) => {
  const hiddenBreadCrumbsFunc = () => {
    setIsBreadCrumbs(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Подтвердить заказ</h3>
        <div className={styles.buttonContainer}>
          <MainButton
            buttonWidth="orderConfirmWidth"
            buttonTitle="Подтвердить"
            type="order"
            link="/order/completed"
            onClick={hiddenBreadCrumbsFunc}
          />
          <MainButton
            buttonWidth="orderConfirmWidth"
            buttonTitle="Вернуться"
            type="fuel"
            link="/order/total"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderModalConfirm;
