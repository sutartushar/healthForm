import HeroImage from "./components/HeroImage";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <div className="landing-page">
      <HeroImage />
      <BookingForm />
      <Testimonials />
    </div>
  );
}
