import { useContext, createMemo } from "solid-js";
import { AccountsContext } from "../pages/RegistrationsLayout";

function ParentFullName(props) {
  const accounts = useContext(AccountsContext);
  const parent = createMemo(() => accounts.filter((account) => account.Owners[0].AccountId === props.accountId)[0]);
  return (
    <>{parent().Owners[0].AccountOwnerFullName}</>
  );
}

export default ParentFullName;