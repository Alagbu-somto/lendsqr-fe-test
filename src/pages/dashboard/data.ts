import briefcase from "../../components/assets/icons/briefcase.png";
import userfriend from "../../components/assets/icons/user-friends.png";
import users from "../../components/assets/icons/users.png";
import sack from "../../components/assets/icons/sack.png";
import loan from "../../components/assets/icons/loan.png";
import handshake from "../../components/assets/icons/handshake-regular.png";
import savings from "../../components/assets/icons/savings.png";
import usercheck from "../../components/assets/icons/user-check.png";
import usertimes from "../../components/assets/icons/user-times.png";
import piggybank from "../../components/assets/icons/piggy-bank.png";
import coins from "../../components/assets/icons/coins-solid.png";
import transaction from "../../components/assets/icons/transaction.png";
import chartbar from "../../components/assets/icons/chart-bar.png";
import galaxy from "../../components/assets/icons/galaxy.png";
import usercog from "../../components/assets/icons/user-cog.png";
import scroll from "../../components/assets/icons/scroll.png";
import sliders from "../../components/assets/icons/sliders-h.png";
import clipboard from "../../components/assets/icons/clipboard-list.png";
import badge from "../../components/assets/icons/badge-percent.png";
import usercard from "../../components/assets/icons/user-card.png";
import activeuser from "../../components/assets/icons/active-user.png";
import userloan from "../../components/assets/icons/user-loan.png";
import usersavings from "../../components/assets/icons/user-savings.png";

type dataMenu = {
  name: string;
  icon: typeof users;
};

export const CUSTOMERS: dataMenu[] = [
  {
    name: "Users",
    icon: userfriend,
  },
  {
    name: "Guarantors",
    icon: users,
  },
  {
    name: "Loans",
    icon: sack,
  },
  {
    name: "Decision Models",
    icon: handshake,
  },

  {
    name: "Savings",
    icon: piggybank,
  },

  {
    name: "Loan Requests",
    icon: loan,
  },

  {
    name: "Whitelist",
    icon: usercheck,
  },

  {
    name: "Karma",
    icon: usertimes,
  },
];

export const BUSINESSES: dataMenu[] = [
  {
    name: "Organization",
    icon: briefcase,
  },
  {
    name: "Loan Products",
    icon: loan,
  },
  {
    name: "Savings Products",
    icon: savings,
  },
  {
    name: "Fees and Charges",
    icon: coins,
  },

  {
    name: "Transactions",
    icon: transaction,
  },

  {
    name: "Services",
    icon: galaxy,
  },

  {
    name: "Service Account",
    icon: usercog,
  },

  {
    name: "Settlements",
    icon: scroll,
  },
  {
    name: "Reports",
    icon: chartbar,
  },
];

export const SETTINGS: dataMenu[] = [
  {
    name: "Preferences",
    icon: sliders,
  },
  {
    name: "Fees and Pricing",
    icon: badge,
  },
  {
    name: "Audit Logs",
    icon: clipboard,
  },
];

type card = {
  name: string;
  icon: typeof users;
  figure: string;
};

export const CARD: card[] = [
  {
    icon: usercard,
    name: "Users",
    figure: "2,453",
  },
  {
    icon: activeuser,
    name: "Active Users",
    figure: "2,453",
  },
  {
    icon: userloan,
    name: "Users with Loans",
    figure: "12,453",
  },

  {
    icon: usersavings,
    name: "Users with Savings",
    figure: "102,453",
  },
];
