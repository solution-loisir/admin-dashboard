const amiliaAuth = require("../helpers/auth");
const getProgram = require("../helpers/getProgram");
const getActivities = require("../helpers/getActivities");
const getSchedule = require("../helpers/getSchedule");
const getSpotsStats = require("../helpers/getSpotsStats");
const getRegistrations = require("../helpers/getRegistrations");
const formatActivities = require("../helpers/formatActivities");
require("dotenv").config();

exports.handler = async (event, context) => {
  
  if(!context.clientContext.user.app_metadata.roles.includes(process.env.SUPER_USER_ROLE)) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized endpoint" })
    }
  };

  const token = await amiliaAuth();
  const programs = await getProgram(token);
  const registrations = await getRegistrations(token);

  const data = [];
  
  for(let index = 0; index < 2 /*programs.length*/; index++) {
    const activities = await getActivities(token, programs, { index });
    const activitiesWithRegistrations = registrations.integrateRegistrationsToActivities(activities);
    const spotsStats = getSpotsStats(activities);
    const schedule = getSchedule(activities);
    const activitiesModel = formatActivities(activities);
    programs[index].Activities = activitiesWithRegistrations;
    programs[index].SpotsStats = spotsStats;
    programs[index].ScheduleData = schedule;
    programs[index].ActivitiesModel = activitiesModel;
    data.push(programs[index]);
  };

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch(error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  };
};