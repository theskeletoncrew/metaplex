import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Providers } from './providers';
import {
  AnalyticsView,
  ArtCreateView,
  ArtistsView,
  ArtistView,
  ArtView,
  ArtworksView,
  AuctionCreateView,
  AuctionView,
  HomeView,
  StaticPageView,
} from './views';
import { AdminView } from './views/admin';
import PackView from './views/pack';
import { PackCreateView } from './views/packCreate';
import { BillingView } from './views/auction/billing';
import { CollectionsView } from './views/collections';
import { CollectionDetailView } from './views/collections/collectionDetail';

export function Routes() {
  const shouldEnableNftPacks = process.env.NEXT_ENABLE_NFT_PACKS === 'true';
  const shouldAllowVisibility = false; //true;
  return (
    <>
      <HashRouter basename={'/'}>
        <Providers>
          <Switch>
            {shouldAllowVisibility && shouldEnableNftPacks && (
              <Route
                exact
                path="/admin/pack/create/:stepParam?"
                component={() => <PackCreateView />}
              />
            )}
            {shouldAllowVisibility && shouldEnableNftPacks && (
              <Route
                exact
                path="/pack/:packKey"
                component={() => <PackView />}
              />
            )}
            {shouldAllowVisibility && (
              <Route exact path="/admin" component={() => <AdminView />} />
            )}
            {shouldAllowVisibility && (
              <Route
                exact
                path="/analytics"
                component={() => <AnalyticsView />}
              />
            )}
            {shouldAllowVisibility && (
              <Route
                exact
                path="/art/create/:step_param?"
                component={() => <ArtCreateView />}
              />
            )}
            {shouldAllowVisibility && (
              <Route
                exact
                path="/artworks/:id?"
                component={() => <ArtworksView />}
              />
            )}
            <Route exact path="/art/:id" component={() => <ArtView />} />
            {shouldAllowVisibility && (
              <Route
                exact
                path="/artists/:id"
                component={() => <ArtistView />}
              />
            )}
            {shouldAllowVisibility && (
              <Route exact path="/artists" component={() => <ArtistsView />} />
            )}

            {shouldAllowVisibility && (
              <Route
                exact
                path="/auction/create/:step_param?"
                component={() => <AuctionCreateView />}
              />
            )}
            <Route
              exact
              path="/auction/:id"
              component={() => <AuctionView />}
            />
            <Route
              exact
              path="/auction/:id/billing"
              component={() => <BillingView />}
            />
            {shouldAllowVisibility && (
              <Route path="/about" component={() => <StaticPageView />} />
            )}
            {shouldAllowVisibility && (
              <Route
                path="/collections"
                component={() => <CollectionsView />}
              />
            )}
            {shouldAllowVisibility && (
              <Route
                path="/collection/:id"
                component={() => <CollectionDetailView />}
              />
            )}
            <Route
              path="/"
              component={() => (
                <HomeView shouldAllowVisibility={shouldAllowVisibility} />
              )}
            />
          </Switch>
        </Providers>
      </HashRouter>
    </>
  );
}
