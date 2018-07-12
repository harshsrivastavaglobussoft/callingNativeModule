//
//  MyObjcClass.m
//  devdactic_nativeModules
//
//  Created by Sumit Ghosh on 12/07/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
@interface MyObjcClass: NSObject <RCTBridgeModule>
@end


@implementation MyObjcClass
RCT_EXPORT_MODULE()

-(NSDictionary*)constamtsToExport {
  return @{@"greeting":@"Welcome to the DevDactic\n React-Native"};
}


RCT_EXPORT_METHOD(squareMe:(NSString *)number:(RCTResponseSenderBlock)callback) {
  NSNumber *num = @([number intValue]);
  NSNumber *myValue = @([num integerValue] * [num integerValue]);
  callback(@[[NSNull null], [NSNumber numberWithInt:([myValue integerValue])]]);
}

@end
