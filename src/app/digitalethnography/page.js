import DEContent from "@/components/views/digitalethnography/Content";
import DETopbar from "@/components/views/digitalethnography/DETopbar";
import React from "react";

const DEContent = dynamic(
  () => import("@/components/views/digitalethnography/Content"),
  { ssr: false }
);

function page() {
  return (
    <div>
      <DETopbar />
      <DEContent />
    </div>
  );
}

export default page;
