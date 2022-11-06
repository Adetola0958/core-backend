const emailMessage = async(message) => {
    const output = `
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width">
    
      <!-- <link inline rel="stylesheet" href="bower_components/ink/css/ink.css">
      <link inline rel="stylesheet" href="styles/styles.css"> -->
    
    </head>
    <body style="min-width: 100%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;margin: 0;padding: 0;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;text-align: left;line-height: 19px;font-size: 14px;width: 100% !important;">
        <table class="body" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;height: 100%;width: 100%;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;">
            <tr style="padding: 0;vertical-align: top;text-align: left;">
                <td class="center" align="center" valign="top" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0;vertical-align: top;text-align: center;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
            <center style="width: 100%;min-width: 580px; ">
    
    
              <table class="row header" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;">
                <tr style="padding: 0;vertical-align: top;text-align: left;">
                  <td class="center" align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0;vertical-align: top;text-align: center;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                    <center style="width: 100%;min-width: 580px;">
    
                      <table class="container" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: inherit;width: 580px;margin: 0 auto;">
                        <tr style="padding: 0;vertical-align: top;text-align: left;">
                          <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
    
                            <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 50px !important;vertical-align: top;text-align: left;margin: 0 auto;width: 580px;">
                              <tr style="padding: 0;vertical-align: top;text-align: left;">
                                <td class="six sub-columns" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;min-width: 0px;padding-right: 10px;width: 50%;border-collapse: collapse !important;">
                                  <img src="https://res.cloudinary.com/dtnep18ae/image/upload/v1643364029/corebank-logo_p98w4s.png" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;width: auto;max-width: 100%;float: left;clear: both;display: block;">
                                </td>
                  
                                <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
    
                              </tr>
                            </table>
    
                          </td>
                        </tr>
                      </table>
    
                    </center>
                  </td>
                </tr>
              </table>
              <br>
    
              <table class="container" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: inherit;width: 580px;margin: 0 auto;">
                <tr style="padding: 0;vertical-align: top;text-align: left;">
                  <td style="background-color: #ccc;word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
    
                    <!-- content start -->
                    <!-- <table class="row" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block;">
                      <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
    
                          <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 580px;">
                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                              <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
    
                                <h1 style="color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;margin: 0;text-align: left;line-height: 1.3;word-break: normal;font-size: 40px;">Hi, Elijah Baily</h1>
                                <p class="lead" style="margin: 0;margin-bottom: 10px;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 21px;font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                <img width="580" height="300" src="http://placehold.it/580x300" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;width: auto;max-width: 100%;float: left;clear: both;display: block;">
    
                              </td>
                              <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                            </tr>
                          </table>
    
                        </td>
                      </tr>
                    </table> -->
    
                    <!-- <table class="row callout" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block;">
                      <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
    
                          <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 580px;">
                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                              <td class="panel" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px !important;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;background: #f2f2f2;border: 1px solid #d9d9d9;border-collapse: collapse !important;">
    
                                <p style="margin: 0;margin-bottom: 10px;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">Phasellus dictum sapien a neque luctus cursus. Pellentesque sem dolor, fringilla et pharetra vitae. <a href="#" style="color: #2ba6cb;text-decoration: none;">Click it! »</a></p>
    
                              </td>
                              <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                            </tr>
                          </table>
    
                        </td>
                      </tr>
                    </table> -->
    
                    <table class="row" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block;">
                      <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
    
                          <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: center;margin: 0 auto;width: 580px;">
                            <tr style="padding: 0;vertical-align: top;text-align: center;">
                              <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">

                                <td style="text-align: left">${message}</td>
    
                              </td>
                              <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: center;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                            </tr>
                          </table>
    
                        </td>
                      </tr>
                    </table>
    
    
                    <table class="row" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block;">
                      <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
    
                          <table class="three columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 130px;">
                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                              <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
    
                                <!-- <table class="button" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;width: 100%;overflow: hidden;">
                                  <tr style="padding: 0;vertical-align: top;text-align: left;">
                                    <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 8px 0;vertical-align: top;text-align: center;color: #ffffff;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;display: block;background: #2ba6cb;border: 1px solid #2284a1;border-collapse: collapse !important;width: auto !important;">
                                      <a href="#" style="color: #ffffff;text-decoration: none;font-weight: bold;font-family: Helvetica, Arial, sans-serif;font-size: 16px;">Click Me!</a>
                                    </td>
                                  </tr>
                                </table> -->
    
                              </td>
                              <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                            </tr>
                          </table>
    
                        </td>
                      </tr>
                    </table>
    
    
                    <table class="row footer" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top; width: 100%;position: relative;display: block; background-color: #12082D; color: #fff;">
                      <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="wrapper" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;border-collapse: collapse !important;">
    
                          <table class="six columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 280px;">
                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                              <td class="left-text-pad" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;padding-left: 10px;border-collapse: collapse !important;">
    
                                <!-- <h5 style="font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;margin: 0;text-align: left;line-height: 1.3;word-break: normal;font-size: 24px;">Our Locations:</h5>
                                <p style="margin: 0;margin-bottom: 10px;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">22/24 Ago Palace Way Okota, Isolo Lagos</p> -->
                                <p style="margin: 0;margin-bottom: 10px;font-style: italic;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px; padding-top: 6px;">Innovative and Reward Banking...</p>
    
                                <table class="tiny-button" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;width: 100%;overflow: hidden;">
                                  <tr style="padding: 0;vertical-align: top;text-align: left;">
                                    <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 8px 3px !important;vertical-align: top;text-align: center;color: #ffffff;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;display: block;background: inherit;border-radius: 50px;border: 1px solid white;border-collapse: collapse !important;width: 200px !important;">
                                      <a href="#" style="color: #ffffff;text-decoration: none;font-weight: normal;font-family: Helvetica, Arial, sans-serif;font-size: 12px;">Get us on <span style="font-size: 16px;">App Store</span></a>
                                    </td>
                                  </tr>
    
                                <br>
    
                                <table class="tiny-button " style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;width: 100%;overflow: hidden;">
                                  <tr style="padding: 0;vertical-align: top;text-align: left;">
                                    <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 8px 3px !important;vertical-align: top;text-align: center;color: #ffffff;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;display: block;background: inherit;border-radius: 50px;border: 1px solid white;border-collapse: collapse !important;width: 200px !important;">
                                      <a href="#" style="color: #ffffff;text-decoration: none;font-weight: normal;font-family: Helvetica, Arial, sans-serif;font-size: 12px;">Download us on <span style="font-size: 16px;">Play Store</span></a>
                                    </td>
                                  </tr>
                                </table>
    
                                <br>
    
                                <table style="padding: 0;vertical-align: top;text-align: center;width: 100%;overflow: hidden;">
                                  <tr style="padding: 0;vertical-align: top;text-align: center;">
                                    <td style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;vertical-align: top;text-align: center;color: #ffffff;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;display: block;border-collapse: collapse !important;width: auto !important;">
                                      <p style="color: #ffffff;text-decoration: none;font-weight: normal;font-family: Helvetica, Arial, sans-serif;font-size: 12px;">&copy; Copyright Corebank Nigeria, 2022</p>
                                    </td>
                                  </tr>
                                </table>
    
                              </td>
                              <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                            </tr>
                          </table>
    
                        </td>
                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
    
                          <table class="six columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 280px;">
                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                              <td class="last right-text-pad" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;padding-right: 0px;border-collapse: collapse !important;">
                                <h5 style="color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0; padding-bottom: 15px;margin: 0;text-align: left;line-height: 1.3;word-break: normal;font-size: 24px;">Let's Chat:</h5>
                                <p style="margin: 0;margin-bottom: 10px;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">Phone: +234 913 883 1511</p>
                                <p style="margin: 0;margin-bottom: 10px;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;text-align: left;line-height: 19px;font-size: 14px;">Email: <a href="mailto:customercare@corestepmfb.com" style="color: #2ba6cb;text-decoration: none;">customercare@corestepmfb.com</a></p>
                              </td>
                              <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: white;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                            </tr>
                          </table>
    
                        </td>
                      </tr>
                    </table>
    
    
                    <table class="row" style="border-spacing: 0;border-collapse: collapse;padding: 0px;vertical-align: top;text-align: left;width: 100%;position: relative;display: block; background-color: white;">
                      <tr style="padding: 0;vertical-align: top;text-align: left;">
                        <td class="wrapper last" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 10px 20px 0px 0px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;position: relative;padding-right: 0px;border-collapse: collapse !important;">
    
                          <table class="twelve columns" style="border-spacing: 0;border-collapse: collapse;padding: 0;vertical-align: top;text-align: left;margin: 0 auto;width: 580px;">
                            <tr style="padding: 0;vertical-align: top;text-align: left;">
                              <td align="center" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0px 0px 10px;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;border-collapse: collapse !important;">
                                <center style="width: 100%;min-width: 580px;">
                                  <p style="text-align: center;margin: 0;margin-bottom: 10px;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;padding: 0;line-height: 19px;font-size: 14px;"><a href="#" style="color: #2ba6cb;text-decoration: none;">Terms</a> | <a href="#" style="color: #2ba6cb;text-decoration: none;">Privacy</a> | <a href="#" style="color: #2ba6cb;text-decoration: none;">Unsubscribe</a></p>
                                </center>
                              </td>
                              <td class="expander" style="word-break: break-word;-webkit-hyphens: auto;-moz-hyphens: auto;hyphens: auto;padding: 0 !important;vertical-align: top;text-align: left;color: #222222;font-family: &quot;Helvetica&quot;, &quot;Arial&quot;, sans-serif;font-weight: normal;margin: 0;line-height: 19px;font-size: 14px;visibility: hidden;width: 0px;border-collapse: collapse !important;"></td>
                            </tr>
                          </table>
    
                        </td>
                      </tr>
                    </table>
    
                    <!-- container end below -->
                  </td>
                </tr>
              </table>
    
            </center>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `
    return output
}

export default emailMessage 