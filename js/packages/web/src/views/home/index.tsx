import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { SalesListView } from './components/SalesList';
import { SetupView } from './setup';

export const HomeView = (props: { shouldAllowVisibility: boolean }) => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showHome = props.shouldAllowVisibility;
  const showAuctions = (store && isConfigured) || isLoading;

  if (!showHome) {
    return (
      <Layout style={{ margin: 0, alignItems: 'center' }}>
        <a
          style={{
            margin: '100px 0',
            fontSize: '24px',
            fontFamily: 'Druk Wide',
            color: '#fff',
          }}
          href="https://market.skeletoncrew.rip/drops"
        >
          See all Drops
        </a>
      </Layout>
    );
  }

  return (
    <Layout style={{ margin: 0, alignItems: 'center' }}>
      {showAuctions ? <SalesListView /> : <SetupView />}
    </Layout>
  );
};
