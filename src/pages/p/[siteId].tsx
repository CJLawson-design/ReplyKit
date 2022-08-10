import { useRouter } from "next/router";

const FeedbackPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Page ID: {router.query.sideID}</h1>
    </div>
  );
};

export default FeedbackPage;
