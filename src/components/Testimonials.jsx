// Testimonials.js
import "./Testimonials.css";

const Testimonials = () => {
  const fakeUsers = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FRashmi_KEXRN9maT.png%3FupdatedAt%3D1686564335393&w=1920&q=75",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FPatel_xOznYxGIr5.png%3FupdatedAt%3D1686564335378&w=1920&q=75",
      review:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      image:
        "https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2FDeep_P-vGzCQ88.png%3FupdatedAt%3D1686564335311&w=1920&q=75",
      review: "Vestibulum nec tellus vel libero lacinia egestas eget ac metus.",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Patients Say</h2>

      <div className="testimonial-cards-container">
        {fakeUsers.map((user) => (
          <div key={user.id} className="testimonial-card">
            <img src={user.image} alt={user.name} className="user-image" />
            <p className="user-review">{user.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
