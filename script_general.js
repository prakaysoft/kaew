(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"class":"Player","gap":10,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","minHeight":0,"minWidth":0,"id":"rootPlayer","start":"this.init()","data":{"defaultLocale":"en","name":"Player875","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"volume":1,"rate":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false},"history":{}},"backgroundColor":["#FFFFFF"],"backgroundColorRatios":[0],"scrollBarMargin":2,"scripts":{"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setLocale":TDV.Tour.Script.setLocale,"getMediaByName":TDV.Tour.Script.getMediaByName,"openLink":TDV.Tour.Script.openLink,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"clone":TDV.Tour.Script.clone,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"mixObject":TDV.Tour.Script.mixObject,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPixels":TDV.Tour.Script.getPixels,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playAudioList":TDV.Tour.Script.playAudioList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setMapLocation":TDV.Tour.Script.setMapLocation,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"registerKey":TDV.Tour.Script.registerKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"disableVR":TDV.Tour.Script.disableVR,"isPanorama":TDV.Tour.Script.isPanorama,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setValue":TDV.Tour.Script.setValue,"cloneBindings":TDV.Tour.Script.cloneBindings,"init":TDV.Tour.Script.init,"downloadFile":TDV.Tour.Script.downloadFile,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getComponentByName":TDV.Tour.Script.getComponentByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"enableVR":TDV.Tour.Script.enableVR,"showPopupImage":TDV.Tour.Script.showPopupImage,"initQuiz":TDV.Tour.Script.initQuiz,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getOverlays":TDV.Tour.Script.getOverlays,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleVR":TDV.Tour.Script.toggleVR,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowScore":TDV.Tour.Script.quizShowScore,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showWindow":TDV.Tour.Script.showWindow,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"translate":TDV.Tour.Script.translate,"historyGoBack":TDV.Tour.Script.historyGoBack,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"startMeasurement":TDV.Tour.Script.startMeasurement,"shareSocial":TDV.Tour.Script.shareSocial,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizStart":TDV.Tour.Script.quizStart,"createTween":TDV.Tour.Script.createTween,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios},"hash": "e92c6566439a05c11a4ab1185112d8f35498362b78e46ff60f07786eb74fa741", "definitions": [{"items":[{"camera":"this.panorama_53393280_5F8B_5295_4197_C429F07871FC_camera","media":"this.panorama_53393280_5F8B_5295_4197_C429F07871FC","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"subtitlesBorderColor":"#FFFFFF","class":"ViewerArea","progressBorderSize":0,"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","minHeight":50,"playbackBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","minWidth":100,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","data":{"name":"Main Viewer"},"subtitlesTextShadowOpacity":1,"progressBarBorderRadius":2,"toolTipPaddingRight":6,"progressBarBorderSize":0,"subtitlesBottom":50,"progressRight":"33%","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowColor":"#000000","playbackBarHeight":10,"playbackBarHeadWidth":6,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderSize":0,"subtitlesFontFamily":"Arial","progressBarBackgroundColorDirection":"horizontal","toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","playbackBarBackgroundOpacity":1,"progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"progressBorderRadius":2,"progressLeft":"33%","playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"progressOpacity":0.7,"toolTipPaddingTop":4,"subtitlesGap":0,"progressBarBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","subtitlesFontSize":"3vmin","playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","firstTransitionDuration":0,"progressBorderColor":"#000000","id":"MainViewer","playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"playbackBarLeft":0,"vrThumbstickRotationStep":20,"playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"progressBottom":10,"playbackBarHeadBorderSize":0,"playbackBarProgressBorderColor":"#000000","progressBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"subtitlesTop":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"100%","toolTipFontColor":"#606060","propagateClick":false,"playbackBarHeadBorderColor":"#000000","height":"100%","progressHeight":2,"toolTipPaddingLeft":6},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_54F10078_5F8B_4E75_41D5_70B1E47F26CB","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"id":"panorama_53393280_5F8B_5295_4197_C429F07871FC_camera"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation"},{"thumbnailUrl":"media/panorama_53393280_5F8B_5295_4197_C429F07871FC_t.jpg","hfov":360,"class":"Panorama","data":{"label":"10"},"label":trans('panorama_53393280_5F8B_5295_4197_C429F07871FC.label'),"vfov":180,"hfovMin":"150%","hfovMax":130,"id":"panorama_53393280_5F8B_5295_4197_C429F07871FC","frames":[{"thumbnailUrl":"media/panorama_53393280_5F8B_5295_4197_C429F07871FC_t.jpg","cube":{"levels":[{"tags":"ondemand","width":6144,"class":"TiledImageResourceLevel","height":1024,"colCount":12,"url":"media/panorama_53393280_5F8B_5295_4197_C429F07871FC_0/{face}/0/{row}_{column}.jpg","rowCount":2},{"tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel","height":512,"colCount":6,"url":"media/panorama_53393280_5F8B_5295_4197_C429F07871FC_0/{face}/1/{row}_{column}.jpg","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"class":"PanoramaCameraSequence","id":"sequence_54F10078_5F8B_4E75_41D5_70B1E47F26CB"}],"width":"100%","height":"100%","propagateClick":false,"layout":"absolute","children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.7.js.map
})();
//Generated with v2024.0.7, Fri Jun 28 2024