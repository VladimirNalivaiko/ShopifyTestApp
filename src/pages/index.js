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
    const emptyState = false;
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
          open={true}
          onSelection={(res) => console.log(11)}
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
        <ResourceListWithProducts />
      </Page>
    );
  }

  

  handleSelection = (resources) => {
    console.log('resource picker clicked');
    //this.setState({ open: true });
     console.log(resources);
    // store.set('ids', idsFromResources);
  };
}

export default Index;