import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;

// curl "https://tgdupemoqpxetuqyzmmm.supabase.co/rest/v1/cabins?select=*" ^
// -H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZHVwZW1vcXB4ZXR1cXl6bW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NTk3NjYsImV4cCI6MjAzNjUzNTc2Nn0.GkjxHSohtYz8_X5QpLF5pZkJrXcd05S59I0MsUR-Ijs" ^
// -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZHVwZW1vcXB4ZXR1cXl6bW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NTk3NjYsImV4cCI6MjAzNjUzNTc2Nn0.GkjxHSohtYz8_X5QpLF5pZkJrXcd05S59I0MsUR-Ijs"
