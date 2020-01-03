import { AppProvider, EmptyState, Layout, Page } from '@shopify/polaris';
import { Provider, ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import Cookies from 'js-cookie';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component  {
  state = {open: false};
  render() {
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
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
          showVariants={false}
          open={this.state.open}
          onSelection={this.handleSelection}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <EmptyState
            heading="Discount your products temporarily"
            action={{
              content: 'Select products',
              onAction: () => {
                this.setState({ open: true });
                console.log(this.state);
              },
            }}
            image={img}
          >
            <p>Select products to change their price temporarily.</p>
          </EmptyState>
        </Layout>
      </Page>
    );
  }

  

  handleSelection = (resources) => {
    console.log('resource picker clicked');
    this.setState({ open: false })
    console.log(resources)
  };
}

export default Index;