import PageTitle from '../../components/PageTitle/PageTitle';
import Column from '../../components/Column/Column';

const Favorite = () => (
  <div>
    <PageTitle>Favorite</PageTitle>
    <Column favorite={true} />
  </div>
);

export default Favorite;
