import { AppProvider, EmptyState, Layout, Page } from '@shopify/polaris';
import { Provider, ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
import store from 'store-js';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
import ResourceListWithProducts from '../components/ResourceList';

class Index extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    const emptyState = !store.get('ids');
    return (
      <Page>
         <TitleBar
          primaryAction={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={true}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? (
          <Layout>
            <EmptyState
              heading="Select products to start"
              action={{
                content: 'Select products',
                onAction: () => this.setState({ open: true }),
              }}
              image={img}
            >
              <p>Select products and change their price temporarily</p>
            </EmptyState>
          </Layout>
        ) : (
            <ResourceListWithProducts />
        )}
      </Page>
    );
  }

  

  handleSelection = (resources) => {
    console.log('resource picker clicked');
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: true });
    console.log(resources);
    store.set('ids', idsFromResources);
  };
}

export default Index;