const getItems = require("./getItems");
const path = require("path");
require("dotenv").config();

module.exports = async (token) => {
  const registrations = await getItems(token, path.join(process.env.AMILIA_BASE_URL, "registrations?showEnded=true"));
  return {
    data: registrations,
    integrateRegistrationsToActivities(activities) {
      activities.forEach(activity => {
        let registrations = [];
        this.data.forEach(registration => {
          if(registration.Activity.Id === activity.Id && !registration.IsCancelled) {
            registrations.push(registration);
          }
        });
        activity.Registrations = registrations;
      });

      return activities;
    }
  };
};