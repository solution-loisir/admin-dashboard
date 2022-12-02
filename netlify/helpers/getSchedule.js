const getLevel = require("./getLevel");
const getTime = require("../filters/time-readable");
const getWeekDay = require("../filters/getWeekDay");
const getEmoji = require("../filters/produceLevelEmoji");
const { convertPosition } = require("../filters/convertSchedulePosition");

module.exports = (activities, { secret = false } = {}) => {
  return activities.reduce((acc, course) => {
    if(!acc[getWeekDay(course.StartDate)]) acc[getWeekDay(course.StartDate)] = [];

    acc[getWeekDay(course.StartDate)].push({

      start: getTime(course.StartDate),
      end: getTime(course.EndDate),
      rowStart: convertPosition(getTime(course.StartDate)),
      rowEnd: convertPosition(getTime(course.EndDate)),
      text: `${getTime(course.StartDate)} à ${getTime(course.EndDate)}`,
      niveau: getLevel(course.CategoryName),
      complet: course.SpotsRemaining ? false : true,
      uid: course.Id,
      spots_remaining: course.SpotsRemaining,
      max_attendance: course.MaxAttendance,
      link: secret ? course.SecretUrl : course.Url,
      emoji: getEmoji(getLevel(course.CategoryName))
    });

    return acc;
  }, {});
};