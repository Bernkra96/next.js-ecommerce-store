import { crateItem } from './psotgersControler';

let firstRun = true;

export async function createTables() {
  // create table

  if (firstRun) {
    await crateItem(
      'Space Shuttle',
      'NASA',
      428000000,
      9,
      'https://images-assetmages-assets.nasa.gov/image/sts119-s-005/sts119-s-005~thumb.jpg',
      'Space Shutlle by NASA. Fly to LEO /ISS / GTO /GEO  Stages 1.5  Crew 2 - 8 ',
      '"Space Shutlle by NASA. Fly to LEO /ISS / GTO /GEO Stages 1.5',
    );
    await crateItem(
      'Space Launch System',
      'ULA',
      2010200000,
      9,
      'https://images-assets.nasa.gov/image/KSC-20220614-PH-CSH01_0044/KSC-20220614-PH-CSH01_0044~large.jpg',
      'SLS by ULA Fly to  LEO/Luna Orobit Stages 2.5 Crew 4',
      'SLS by ULA Fly to LEO / Luna Orobit Stages 2.5 Crew 4 Payload to LEO [note 2] Mass Block 1: 209,000 lb (95 t) Payload to trans-lunar injection Mass Block 1: > 59,500 lb (27 t)',
    );

    await crateItem(
      'Antares',
      'Northrop Grumman',
      77000000,
      24,
      'https://images-assets.nasa.gov/image/201401080005HQ/201401080005HQ~medium.jpg',
      ' Antares by Northrop Grumman Fly to LEO Stages 2-3 ',
      ' Antares by Northrop Grumman Fly to LEO Stages 2-3 Payload to LEO Mass 8,000 kg (18,000 lb)',
    );

    await crateItem(
      'Electron',
      'Rocket Lab',
      7180000,
      17,
      'https://images-assets.nasa.gov/image/KSC-20230518-PH-RKL01_0002/KSC-20230518-PH-RKL01_0002~medium.jpg',
      'Electron by Rocket Lab Fly  to LEO / SSO Stages : 2-3',
      '"Electron by Rocket Lab Fly  to LEO / SSO Stages : 2-3 Payload to LEO Mass Original: 225 kg (496 lb) Updated: 300 kg (660 lb) Payload to SSO Mass Original: 150 kg (330 lb) Updated: 200 kg (440 lb)',
    );

    firstRun = false;
  }
}
