import { MainTable } from '../../components/layout/main/MainTable';
import { Navbar } from '../../components/layout/navbar/Navbar';
import { Modal } from '../../components/UI/modals/Modal';
import { Overlay } from '../../components/UI/overlay/Overlay';

export const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <MainTable />
      <Modal />
      <Overlay />
    </div>
  );
};
