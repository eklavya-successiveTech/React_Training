const withDataFetching = (WrappedComponent, fetchData) => {
  const DataFetcherComponent = async (props) => {
    let fetchedData = null;
    let error = null;

    try {
      fetchedData = await fetchData();
    } catch (e) {
      console.error('Data fetching failed in HOC:', e);
      error = e.message || 'An unknown error occurred.';
    }

    if (error) {
      return (
        <div>
          <p>Error loading data: {error}</p>
        </div>
      );
    }

   
    return <WrappedComponent data={fetchedData} {...props} />;
  };

  DataFetcherComponent.displayName = `withDataFetching(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return DataFetcherComponent;
};

export default withDataFetching;