import * as React from 'react';
import { LayerPage } from 'office-ui-fabric-react/lib/demo/pages/LayerPage/LayerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';

export class LayerComponentPage extends React.Component<any, any> {
  public render() {
    return (
      <div ref='pageElement'>
        <ComponentPage>
          <PageHeader pageTitle='Layer' backgroundColor='#038387'
            links={
            [
              {
                'text': 'Overview',
                'location': 'Overview'
              },
              {
                'text': 'Best Practices',
                'location': 'Best Practices'
              },
              {
                'text': 'Variants',
                'location': 'Variants'
              },
              {
                'text': 'Implementation',
                'location': 'Implementation'
              }
            ]
          }/>
          <LayerPage isHeaderVisible={ false } />
        </ComponentPage>
      </div>
    );
  }
}
